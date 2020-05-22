import React from "react";
import { render } from "react-dom";

import "./index.scss";
import { Menu } from "./components/Menu";
import { MiniCart } from "./components/Minicart";

export const Header = () => {

  $("#mi-cart").click(function() {
    $(".carrinho-itens").addClass("showMiniCart")
  });

  $("#mi-cart").click(function () {
    $("#backdrop-minicart").addClass("showBackdrop");
  });

  $("#backdrop-minicart").click(function () {
    $(".carrinho-itens").removeClass("showMiniCart");
  });

  $("#backdrop-minicart").click(function () {
    $("#backdrop-minicart").removeClass("showBackdrop");
  });

  $('.fulltext-search-box').attr('placeholder', 'Digite Aqui');

};
