import "./Documents.scss";

import React, { useEffect, useState } from "react";

import DocuTemplate from "./DocuTemplate";
import axios from "axios";

type Props = {};

const Documents = (props: Props) => {
  return (
    <div className="documents">
      <div className="documents__docu">
        <DocuTemplate />
      </div>
      <div className="documents__docu">
        <DocuTemplate />
      </div>
    </div>
  );
};

export default Documents;
