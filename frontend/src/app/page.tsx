"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Display your Spotify Profile Data</h1>

      <section id="profile">
        <h2>
          Logged in as <span id="displayName"></span>
        </h2>
        <img id="avatar" width="200" src="#" />
        <ul>
          <li>
            User ID: <span id="id"></span>
          </li>
          <li>
            Email: <span id="email"></span>
          </li>
          <li>
            Spotify URI: <a id="uri" href="#"></a>
          </li>
          <li>
            Link: <a id="url" href="#"></a>
          </li>
          <li>
            Profile Image: <span id="imgUrl"></span>
          </li>
        </ul>
      </section>
    </main>
  );
}
