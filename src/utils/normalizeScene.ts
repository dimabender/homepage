import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function normalizeScene(
  model: THREE.Group<THREE.Object3DEventMap>,
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
) {
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  // const forward = new THREE.Vector3();
  // model.getWorldDirection(forward);
  //
  // const desired = new THREE.Vector3(0, 0, -1);
  // const quaternion = new THREE.Quaternion().setFromUnitVectors(
  //   forward,
  //   desired,
  // );
  // model.applyQuaternion(quaternion);

  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const radius = sphere.radius;
  const fov = camera.fov * (Math.PI / 180);
  const dist = radius / Math.sin(fov / 2);
  camera.position.set(0, 0, dist * 0.7);
  controls.target.set(0, 0, 0);
  controls.update();
}
