import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMediaQuery } from "@mui/material";

import { formatCurrency } from "../../utils/currency";

function row(v1, v2, v3, v4) {
  return { v1, v2, v3, v4 };
}

const fontSize = { xs: "10px", md: "16px" };

const formatPrice = (value) => {
  if (value && value !== "-") {
    return `$${value}`;
  } else {
    return value;
  }
};

export default function PriceComparison({ data }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const upfront = data.upfront_costs;
  const monthly = data.monthly_fee;
  const commitment = data.commitment;
  const milesIncluded = data.monthly_miles_included;
  const milesOverage = data.miles_overage;
  const purchaseOption = data.purchase_option;
  const incentives = data.incentives;

  const rows = [
    row(
      "Upfront payment",
      `$${upfront.zevvy}`,
      `$${upfront.lease}`,
      `$${upfront.loan}`
    ),
    row(
      "Monthly",
      `From $${formatCurrency(monthly.zevvy)}`,
      `From $${formatCurrency(monthly.lease)}`,
      `From $${formatCurrency(monthly.loan)}`
    ),
    row(
      "Commitment",
      `${commitment.zevvy}+ months`,
      `${commitment.lease}+ months`,
      `${commitment.loan}+ months`
    ),
    row(
      "Miles included",
      milesIncluded.zevvy && milesIncluded.zevvy !== "-"
        ? `${milesIncluded.zevvy}/month`
        : milesIncluded.zevvy,
      milesIncluded.lease && milesIncluded.lease !== "-"
        ? `${milesIncluded.lease}/month`
        : milesIncluded.lease,
      milesIncluded.loan && milesIncluded.loan !== "-"
        ? `${milesIncluded.loan}/month`
        : milesIncluded.loan
    ),
    row(
      "Miles overage",
      milesOverage.zevvy && milesOverage.zevvy !== "-"
        ? `${formatPrice(milesOverage.zevvy)}/mile`
        : milesOverage.zevvy,
      milesOverage.lease && milesOverage.lease !== "-"
        ? `${formatPrice(milesOverage.lease)}/mile`
        : milesOverage.lease,
      milesOverage.loan && milesOverage.loan !== "-"
        ? `${formatPrice(milesOverage.loan)}/mile`
        : milesOverage.loan
    ),
    row(
      "Purchase option",
      `${purchaseOption.zevvy}`,
      `${purchaseOption.lease}`,
      `${purchaseOption.loan}`
    ),
    row(
      "Incentives",
      `${incentives.zevvy}`,
      `${incentives.lease}`,
      `${incentives.loan}`
    ),
  ];

  return (
    <Box mt="25px">
      <TableContainer
        sx={{
          borderRadius: "12px",
          border: "1px solid rgba(27, 47, 57, 0.2)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell
                sx={{
                  py: 1,
                  background: "rgba(115, 229, 255, 0.1)",
                  borderLeft: "1px solid #74E5FF",
                  borderTop: "1px solid #74E5FF",
                  borderRight: "1px solid #74E5FF",
                }}
              >
                <svg
                  style={{ marginTop: "6px" }}
                  width={isMobile ? 49 * 1.1 : 49 * 1.6}
                  height={isMobile ? 16 * 1.1 : 16 * 1.6}
                  viewBox="0 0 49 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0761 0H4.03106L2.01556 7.52246H9.53802C13.6925 7.52246 17.9629 4.15456 19.0761 0Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M0 15.043H15.0449L17.0605 7.52051H9.53804C5.38356 7.52051 1.11319 10.8884 0 15.043Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M24.2175 10.2587L28.201 5.5134V4.49609H23.3015L23.0592 5.40334V5.40994H26.9569L22.9646 10.1464V11.1638H28.0512L28.2956 10.2587H24.2175Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M32.7214 9.71177C32.6025 9.94519 32.4066 10.1346 32.1336 10.2821C31.854 10.4315 31.5412 10.508 31.2242 10.5045C30.9394 10.5091 30.6574 10.4473 30.4006 10.3239C30.1655 10.2117 29.9636 10.0402 29.8147 9.82626C29.6659 9.60722 29.5743 9.35436 29.5483 9.0908H33.3513C33.3579 9.02915 33.3645 8.96309 33.3711 8.89261C33.3776 8.82446 33.3799 8.75388 33.3799 8.68564C33.3732 8.2034 33.2698 7.77179 33.0694 7.39526C32.8767 7.02675 32.5826 6.7211 32.2218 6.51446C31.8432 6.30092 31.4144 6.19222 30.9798 6.19957C30.4954 6.19957 30.0638 6.30605 29.685 6.51902C29.5059 6.61758 29.342 6.74144 29.1983 6.88678C29.0398 7.04205 28.9055 7.22018 28.7997 7.41524C28.5843 7.81389 28.4751 8.26128 28.4827 8.71435C28.4814 8.91929 28.5021 9.12376 28.5444 9.3243C28.5983 9.58988 28.695 9.84496 28.8306 10.0796C29.0576 10.4759 29.3909 10.8008 29.7929 11.0176C30.2002 11.24 30.6648 11.3509 31.1868 11.3501C31.5254 11.3533 31.8623 11.3013 32.1842 11.196C32.4767 11.1007 32.7496 10.9538 32.9902 10.7622C33.2073 10.5931 33.3772 10.3709 33.4834 10.117L32.7214 9.71177ZM29.8062 7.6507C29.9311 7.45835 30.1012 7.29956 30.3017 7.18826C30.5055 7.07469 30.7355 7.01626 30.9688 7.01873C31.2001 7.01428 31.4288 7.06804 31.6338 7.17505C31.8251 7.27821 31.9848 7.43113 32.0963 7.61765C32.2108 7.80932 32.2812 8.04486 32.3077 8.32896H29.5483C29.5851 8.08712 29.6731 7.85591 29.8062 7.6507Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M37.4227 6.37939L36.0201 10.2968H36.0002L34.6064 6.37939H33.5341L35.3595 11.1644H36.6499L38.4974 6.37939H37.4227Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M42.8374 6.37939L41.4347 10.2968H41.4171L40.0232 6.37939H38.9487L40.7763 11.1644H42.0669L43.9122 6.37939H42.8374Z"
                    fill="#1D323D"
                  />
                  <path
                    d="M48.9885 6.37939H47.9713V9.29047C47.9745 9.46365 47.9429 9.63571 47.8785 9.79647C47.814 9.95723 47.7179 10.1034 47.596 10.2264C47.474 10.3494 47.3286 10.4467 47.1684 10.5125C47.0082 10.5783 46.8364 10.6112 46.6632 10.6095C46.4514 10.6147 46.2424 10.5605 46.0599 10.4531C45.8898 10.3491 45.753 10.1986 45.6657 10.0193C45.5686 9.82535 45.5195 9.61088 45.5226 9.39397V6.37939H44.4964V9.46004C44.4895 9.825 44.5736 10.1859 44.7409 10.5104C44.8987 10.808 45.1347 11.057 45.4235 11.2304C45.7274 11.4095 46.0749 11.5009 46.4276 11.4945C46.7379 11.4951 47.0436 11.4187 47.3172 11.2721C47.585 11.1358 47.811 10.9296 47.9713 10.6754H47.9822V10.9949C47.9878 11.2652 47.9209 11.5321 47.7885 11.7678C47.6586 11.9881 47.463 12.1621 47.2292 12.2654C46.9825 12.3799 46.694 12.435 46.3616 12.435C46.1252 12.4378 45.8901 12.4013 45.6657 12.3271C45.4589 12.2587 45.2647 12.1568 45.091 12.0254C44.9172 11.8926 44.77 11.7283 44.6572 11.541L44.3599 12.6508C44.421 12.7084 44.4858 12.7621 44.5538 12.8115C44.8024 12.9896 45.0815 13.1209 45.3772 13.1991C45.7132 13.2896 46.06 13.334 46.408 13.3311C46.9365 13.3311 47.3952 13.2379 47.7842 13.0515C48.158 12.8805 48.4712 12.6003 48.6827 12.2478C48.894 11.8954 48.9997 11.4807 48.9997 11.0036L48.9885 6.37939Z"
                    fill="#1D323D"
                  />
                </svg>
              </TableCell>
              <TableCell sx={{ py: 1, fontSize }}>Lease</TableCell>
              <TableCell sx={{ py: 1, fontSize }}>Loan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row.v1} sx={{ "td, th": { borderBottom: 0 } }}>
                <TableCell
                  align="right"
                  sx={{ fontSize }}
                  component="th"
                  scope="row"
                >
                  {row.v1}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize,
                    background: "rgba(115, 229, 255, 0.1)",
                    borderLeft: "1px solid #74E5FF",
                    borderRight: "1px solid #74E5FF",
                    borderBottom:
                      i + 1 === rows.length
                        ? "1px solid #74E5FF !important"
                        : undefined,
                  }}
                >
                  {row.v2}
                </TableCell>
                <TableCell sx={{ fontSize }}>{row.v3}</TableCell>
                <TableCell sx={{ fontSize }}>{row.v4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
