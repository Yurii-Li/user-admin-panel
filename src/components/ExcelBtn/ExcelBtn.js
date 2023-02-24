import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { orderService } from "../../services";

import "./excelBtn.scss";

import xls from "../../resources/img/xls.svg";

const ExcelBtn = () => {
    const location = useLocation();

    const downloadExcel = async () => {
        const queries = queryString.parse(location.search);
        const { data } = await orderService.getExcel(queries);
        const fileName = `${new Date().toLocaleDateString()}.xls`;
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
    };

    return (
        <button onClick={downloadExcel} className={"excel-btn"}><img  className={"excel-btn__img"}  src={xls} alt="xls" /> </button>
    );
};

export { ExcelBtn };
