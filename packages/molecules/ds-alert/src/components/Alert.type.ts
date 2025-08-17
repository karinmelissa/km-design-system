export const AlertT = {
  title: {
    type: String,
    reflect: true,
    value: (): string => '',
  },
  show: {
  type: Boolean,
  reflect: true,
  value: true,
},
type: {
  type: String,
  reflect: true,
  value: (): "error" | "info" | "success" | "warning" => "success",
},
closeButton: {
  type: Boolean,
  reflect: true,
  value: false,
},
}