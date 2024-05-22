import style from './page.module.css'
import UseRef from './container/useRef';
export default function Home() {
  return (
    <main className={style.main_container}>
      <div>playground</div>
      <UseRef></UseRef>
    </main>
  );
}
