import { Link } from "react-router-dom";

export default function SubLayout({ children }) {
  return (
    <div id="sub">
      <div>
        <img src="../images/sub_top_tit1.png" alt="INTRODUCTION" />
      </div>
      <section className="introduction">
        <aside>
          <img src="../images/sub_aside_cate1_tit.png" alt="팜스토리 소개" />

          <ul className="lnb">
            <li className="on">
              <Link to="/introduction/hello">인사말</Link>
            </li>
            <li>
              <Link to="/introduction/direction">찾아오시는길</Link>
            </li>
          </ul>
        </aside>
        <article>
          <nav>
            <img src="../images/sub_nav_tit_cate1_tit1.png" alt="인사말" />
            <p>
              HOME > 팜스토리소개 > <em>인사말</em>
            </p>
          </nav>

          {children}
        </article>
      </section>
    </div>
  );
}
