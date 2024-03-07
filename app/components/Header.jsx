"use client";

import { useContext } from "react";
import { siteContext } from "../data/siteContext";
import { useState } from "react";

export const Header = () => {
  const { num, setNum } = useContext(siteContext);

  function increase() {
    setNum(num + 1);
  }

  return (
    <header>
      <nav>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <button onClick={increase}>{num}</button>
      </nav>
    </header>
  );
};
