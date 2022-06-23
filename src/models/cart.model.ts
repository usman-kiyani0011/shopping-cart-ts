export interface CartState {
  items: { [productID: string]: number };
  checkoutState: CheckOutState;
  errorMessage: string;
}

type CheckOutState = "LOADING" | "READY" | "ERROR";
