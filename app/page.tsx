import style from './page.module.css'
import RoutingBox from './routingBox';

export default function Home() {
  return (
    <main className={style.main_container}>
      <div className={style.title_wrapper}>
        <div>playground</div>
      </div>
      <RoutingBox></RoutingBox>
    </main>
  );
}
