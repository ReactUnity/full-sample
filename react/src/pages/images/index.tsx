import { ReactUnity, UnityEngine, icon, useGlobals } from '@reactunity/renderer';
import { useEffect, useState } from 'react';
import base64Image from 'src/assets/base64Image.txt';
import pngImage from 'src/assets/bg.png';
import styles from './index.module.scss';

// @ts-expect-error
import check from 'src/assets/check.svg?raw';

const webImage = 'https://www.google.com.tr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
const webVideo = 'https://media.w3.org/2010/05/sintel/trailer.mp4';

export function ImagesPage() {
  const [videoRef, setVideoRef] = useState<ReactUnity.UGUI.VideoComponent>();
  const { customPrefab, renderCamera, cameraRoot, portalRoot, portalCamera } = useGlobals();

  useEffect(() => {
    if (videoRef) {
      videoRef.VideoPlayer.Pause();
    }
  }, [videoRef]);

  const toggleVideo = () => {
    const vp = videoRef.VideoPlayer;
    if (vp.isPlaying) vp.Pause();
    else vp.Play();
  };

  const [renderRef, setRenderRef] = useState<ReactUnity.UGUI.RenderComponent>();

  return (
    <view className={styles.host}>
      <portal
        id="pt"
        target={portalRoot}
        eventCamera={portalCamera}
        style={{ scale: 1 / 200, translateZ: -0.55 }}
        eventViewport={renderRef}
      >
        This is a portal
        <button>Button inside portal</button>
      </portal>

      <section>
        <h2>
          <row>
            Image
            <icon.image />
          </row>
        </h2>

        <row>
          <image source={pngImage} />
          <image source={pngImage} />
          <image source={base64Image} />
          <image source={webImage} />
        </row>
      </section>

      <section>
        <h2>
          <row>
            Vector Images
            <icon.trending_up />
          </row>
        </h2>

        <row>
          <svgimage source={'res:check'} />
          <svg source={check} />
          <svg source={'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/betterplace.svg'} />
          <svg source={'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg'} />
        </row>
      </section>

      <section>
        <h2>
          <row>
            Prefab
            <icon.videogame_asset />
          </row>
        </h2>

        <row>
          <prefab target={customPrefab} />
        </row>
      </section>

      <section>
        <h2>
          <row>
            Icons
            <icon.text_snippet />
          </row>
        </h2>

        <row>
          <icon._10mp style={{ fontSize: 180 }} />
          <icon.add_road style={{ fontSize: 180 }} />
          <icon.festival style={{ fontSize: 180 }} />
          <icon.fmd_good style={{ fontSize: 180 }} />
        </row>
      </section>

      <section>
        <h2>
          <row>
            Border Image
            <icon.crop_square />
          </row>
        </h2>

        <row>
          <view className={styles.borderImage}>This is a border image</view>
        </row>
      </section>

      <section>
        <h2>
          <row>
            Video
            <icon.movie />
          </row>
        </h2>

        <row>
          <video style={{ flexGrow: 1 }} source={webVideo} ref={setVideoRef} onPointerClick={toggleVideo} />
        </row>
      </section>

      <section>
        <h2>
          <row>
            Render Texture
            <icon._3d_rotation />
          </row>
        </h2>

        <row>
          <render
            width={900}
            height={400}
            style={{ flexGrow: 1 }}
            ref={setRenderRef}
            onDrag={(ev) => {
              cameraRoot.transform.Rotate(new Interop.UnityEngine.Vector3(-ev.delta.y, ev.delta.x, 0));
            }}
            onScroll={(ev: UnityEngine.EventSystems.PointerEventData) => {
              renderCamera.transform.Translate(0, 0, Math.fround(ev.scrollDelta.y * 10), Interop.UnityEngine.Space.Self);
            }}
            onMount={(ev) => ev.gameObject.SetActive(true)}
            onUnmount={(ev) => ev.gameObject.SetActive(false)}
            camera={renderCamera}
          />
        </row>
      </section>
    </view>
  );
}

export default ImagesPage;
