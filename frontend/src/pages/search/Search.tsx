import "./Search.scss";

import { Col, Row } from "react-bootstrap";

import React from "react";
import SearchForm from "./components/SearchForm";
import SearchSvgSelector from "./SearchSvgSelector";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <Row className="search__row">
          <Col className="search__col-1" md={8}>
            <h3 className="search__title">
              Найдите необходимые <br /> данные в пару кликов.
            </h3>
            <div className="search__subtitle text-body">
              Задайте параметры поиска. <br /> Чем больше заполните, тем точнее
              поиск
            </div>
            <div className="search__form">
              <SearchForm />
            </div>
          </Col>
          <Col className="search__col-2" md={4}>
            <SearchSvgSelector id="man_rocket" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Search;
