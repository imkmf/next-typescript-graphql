import * as React from "react";

import Link from "next/link";
import Main from "../layouts/Main";
import Greeter from "../components/Greeter";

export default () => (
  <Main>
    <Greeter text="Hello, world!" />
    <Link href="/withRequest">
      <a>Page with Apollo request</a>
    </Link>
  </Main>
);
