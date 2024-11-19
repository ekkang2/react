import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function DirectionPage() {
  return (
    <DefaultLayout>
      <div id="sub">
        <div>
          <img src="../images/sub_top_tit1.png" alt="INTRODUCTION" />
        </div>
        <section className="introduction">
          <aside>
            <img src="../images/sub_aside_cate1_tit.png" alt="팜스토리 소개" />

            <ul className="lnb">
              <li>
                <Link to="/introduction/hello">인사말</Link>
              </li>
              <li className="on">
                <Link to="/introduction/direction">찾아오시는길</Link>
              </li>
            </ul>
          </aside>
          <article>
            <nav>
              <img
                src="../images/sub_nav_tit_cate1_tit2.png"
                alt="찾아오시는길"
              />
              <p>
                HOME > 팜스토리소개 > <em>찾아오시는길</em>
              </p>
            </nav>

            <p>
              <strong>팜스토리</strong>
              <br />
              주소: 경기도 이천시 잘한다구 신난다동 123
              <br />
              전화: 01-234-5678
              <br />
            </p>
            <p>
              <strong>찾아오시는길</strong>
              <br />

              <div
                id="daumRoughmapContainer1668214668575"
                className="root_daum_roughmap root_daum_roughmap_landing"
              ></div>
            </p>

            <script
              charset="UTF-8"
              className="daum_roughmap_loader_script"
              src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
            ></script>
          </article>
        </section>
      </div>
    </DefaultLayout>
  );
}
