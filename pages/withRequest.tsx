import * as React from "react";

import Link from "next/link";
import Main from "../layouts/Main";
import Pokemon from "../components/Pokemon";

export default () => (
  <Main>
    <Pokemon name="Pikachu" />
    <div>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  </Main>
);
