const $NAME = "plugin_one__VideosBox";

import "./style.scss";

const YOUTUBE_VIDEOS = [
  {
    title: "google search",
    description: "Exploring advanced Google search techniques and tips.",
    link: "https://www.youtube.com/embed/TmleHTmjcUM?si=2HMLTZhXBHxKuYXb",
  },
  {
    title: "wiki",
    description: "Wikipedia-like website with key features.",
    link: "https://www.youtube.com/embed/gPv7UywnOL8?si=zK3lcvfKQR507i6l",
  },
  {
    title: "emails",
    description: "Platform to send and receive emails with core features.",
    link: "https://www.youtube.com/embed/fRGlhfswAJc?si=4axLRxK9PIgePxkY",
  },
  {
    title: "e-commerce",
    description: "E-Commerce platform with modern functionalities.",
    link: "https://www.youtube.com/embed/CAkkfX_kBy0?si=9QQikkWcwXL82oyQ",
  },

  {
    title: "social media",
    description: "Basic social media application with core features.",
    link: "https://www.youtube.com/embed/g7cC4xZFcMA?si=EjfiJezwBkdypidV",
  },

  {
    title: "slot machine",
    description: "Slot machine game with interactive features.",
    link: "https://www.youtube.com/embed/r_m5WJkt5xA?si=n08UE5Nc1BnCUR9b",
  },
].reverse();

export default function VideosBox(props) {
  return (
    <section x-html {...props} class={[$NAME, props.class]}>
      <x-slot
        x-for={(item) => (
          <div class="video-item">
            <iframe
              width="560"
              height="315"
              src={item.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 class="tt-t">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        )}
        x-in={YOUTUBE_VIDEOS}
      ></x-slot>
    </section>
  );
}
