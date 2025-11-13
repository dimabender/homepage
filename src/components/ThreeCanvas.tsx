import normalizeScene from "@/utils/normalizeScene";
import { createSignal, onCleanup, onMount, Show } from "solid-js";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import "@/styles/components/ThreeCanvas.css";

interface Props {
  path: string;
}

export default function ThreeCanvas(props: Props) {
  const { path } = props;

  let container!: HTMLDivElement;

  onMount(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
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

    loader.load(
      path,
      (gltf) => {
        const model = gltf.scene;

        normalizeScene(model, camera, controls);

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      },
    );

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
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
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      scene.traverse((obj: any) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          const mats = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
          mats.forEach((m: any) => {
            m?.dispose?.();
          });
        }
      });
      renderer.dispose();
      scene.clear();
      container.innerHTML = "";
    });
  });

  return (
    <div
      ref={container}
      class="canvas"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
