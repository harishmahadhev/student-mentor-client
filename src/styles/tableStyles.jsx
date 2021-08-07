import { Button, TableCell, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "white",
    fontWeight: 600,
  },
  body: {
    fontSize: 12,
    fontFamily: "sans-serif",
    color: "white",
  },
}))(TableCell);

export const CustomButton = ({ type }) => {
  return (
    <Button
      style={{
        fontSize: "10px",
        fontWeight: 600,
        fontFamily: "sans-serif",
        textTransform: "capitalize",
        width: "4rem",
      }}
      className={"widgetLgButton " + type}
    >
      {type}
    </Button>
  );
};
