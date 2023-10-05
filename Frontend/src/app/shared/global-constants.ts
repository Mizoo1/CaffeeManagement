export class GlobalConstants{

  //Message
  public static genericError: string = "Something went wrong. Please try agin later";

  public static genericSuccessfully: string = "You have successfully registered";

  // Regular Expressions
  public static nameRegex: string = "[a-zA-Z0-9 ]*";

  // Corrected email regex
  public static emailRegex: string = "^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$";

  // Corrected contact number regex
  public static contactNumberRegex: string = "^\\+?[0-9]+$";

  //Variable
  public static error:string = "error";

}
