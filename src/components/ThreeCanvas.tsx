import normalizeScene from "@/utils/normalizeScene";
import { createSignal, onCleanup, onMount, Show } from "solid-js";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import "@/styles/components/ThreeCanvas.css";

interface Props {
  path: string;
  size: number;
}

export default function ThreeCanvas(props: Props) {
  const { path, size } = props;

  const [loading, setLoading] = createSignal(true);

  let container!: HTMLDivElement;

  onMount(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const w0 = container.clientWidth || size;
    const h0 = container.clientHeight || size;
    renderer.setSize(w0, h0);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, w0 / h0, 0.1, 1000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 4;

    const loader = new GLTFLoader();
    let model: THREE.Group | null = null;
    let alive = true;

    loader.load(path, (gltf) => {
      if (!alive) return;

      model = gltf.scene.clone(true);
      normalizeScene(model, camera, controls);
      scene.add(model);
      setLoading(false);
    });

    scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 4, 3);
    scene.add(dirLight);

    let rafId = 0;
    const loop = () => {
      rafId = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    onCleanup(() => {
      alive = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();

      if (model) {
        scene.remove(model);

        const disposeMaterial = (mat: THREE.Material) => {
          for (const key in mat) {
            const value = (mat as any)[key];
            if (value?.isTexture) value.dispose();
          }
          mat.dispose();
        };

        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          mesh.geometry?.dispose();
          const mat = mesh.material;
          if (Array.isArray(mat)) mat.forEach(disposeMaterial);
          else if (mat) disposeMaterial(mat);
        });

        model = null;
      }

      controls.dispose();

      renderer.renderLists.dispose();
      renderer.forceContextLoss();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    });
  });

  return (
    <>
      <div
        ref={container}
        class="canvas"
        style={{
          width: "100%",
          height: "100%",
          ...(loading() && { display: "none" }),
        }}
      />
      <Show when={loading()}>
        <div class="loader-container">
          <div class="loader" />
        </div>
      </Show>
    </>
  );
}
