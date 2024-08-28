import React, { useState, useCallback, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import MainBtn from "../../Buttons/MainBtn/MainBtn";
import { MdOutlineAdd } from "react-icons/md";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainModel from "../../../Model/mainModel/MainModel";
import { faIR } from "@mui/material/locale";
import { useSelector } from "react-redux";

const MainTable = ({ data, columns, form, isLoading, screen }) => {
  const [model, setModel] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const { theme } = useSelector((state) => state.theme);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });


  useEffect(() => {
    if (screen)
       setFullScreen(false)
  }, [screen])
  
  const handleCreateClick = useCallback(() => {
    setModel((prevModel) => !prevModel);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: theme || "light",
    },
    faIR,
  });

  const table = useMaterialReactTable({
    columns,
    data,
    state: {
      pagination,
      isLoading,
    },
    onPaginationChange: setPagination,
    initialState: {
      pagination,
    },
    paginationDisplayMode: "pages",
    columnResizeDirection: "rtl",
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableStickyHeader: true,
    enableFullScreenToggle: fullScreen,
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      showRowsPerPage: true,
      variant: "outlined",
    },
    renderTopToolbarCustomActions: () =>
      form && (
        <MainBtn
          btn={
            <MdOutlineAdd className="mainBtnIcon" onClick={handleCreateClick} />
          }
        />
      ),

    muiTableContainerProps: {
      sx: {
        maxHeight: "calc(100vh - 205px)",
        minWidth: "fit-contain",
        overflow: "scroll",
      },
    },
    muiTableHeadProps: {
      sx: {
        textAlign: "center",
        padding: "20px",
        direction: "rtl",
        backgroundColor: "background.default",
        color: "text.primary",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgb(0, 0, 0, 0.54)",
        padding: "8px",
        justifyContent: "center",
        direction: "rtl",
        backgroundColor: "background.default",
        color: "text.primary",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgb(0, 0, 0, 0.54)",
        padding: "10px 5px",
        textAlign: "center",
        direction: "rtl",
        backgroundColor: "background.default",
        color: "text.primary",
      },
    },
  });

  return (
    <div className="tableContainer" style={{ direction: "rtl" }}>
      <ThemeProvider theme={darkTheme}>
        <MaterialReactTable table={table} />
      </ThemeProvider>
     
    </div>
  );
};

export default MainTable;
