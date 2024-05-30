import Input from "@/components/ui/atoms/input";
import Label from "@/components/ui/atoms/label";

const EmailInput = () => {
  return (
    <div>
      <Label htmlFor="email">Email or username</Label>
      <Input
        id="email"
        placeholder="Email or username"
      />
    </div>
  );
};

export default EmailInput;
