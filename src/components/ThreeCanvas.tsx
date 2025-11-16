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
    renderer.setSize(size, size);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 4;

    const loader = new GLTFLoader();

    let model: THREE.Group<THREE.Object3DEventMap> | null = null;

    loader.load(
      path,
      (gltf) => {
        const cloned = gltf.scene.clone(true);
        model = cloned;

        normalizeScene(model, camera, controls);

        scene.add(model);

        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      },
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 4, 3);
    scene.add(dirLight);

    let rafId: number;

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
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      ro.disconnect();

      if (model) {
        scene.remove(model);

        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh;

          if (mesh.geometry) {
            mesh.geometry.dispose();
          }

          const material = mesh.material as
            | THREE.Material
            | THREE.Material[]
            | undefined;

          if (Array.isArray(material)) {
            material.forEach((m) => m.dispose());
          } else if (material) {
            material.dispose();
          }
        });

        model = null;
      }

      controls.dispose();
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
