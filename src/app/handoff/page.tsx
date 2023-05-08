import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div className="max-w-screen-2xl h-screen px-[6.75rem]">
      <div className="flex flex-col gap-16">
        <div>
          <Typography variant="heading-md">Logos:</Typography>
          <div className="flex flex-col gap-4">
            <Logo />
            <Logo variant="bw" />
          </div>
        </div>
        <div>
          <Typography variant="heading-md">Buttons:</Typography>
          <div className="flex gap-4">
            <Button>BUTTON</Button>
            <Button type="secondary">BUTTON</Button>
            <Button type="highlight">BUTTON</Button>
          </div>
        </div>
        <div>
          <Typography variant="heading-md">Typography:</Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="heading-lg">Heading Lg</Typography>
            <Typography variant="heading-md">Heading Md</Typography>
            <Typography variant="heading-sm">Heading Sm</Typography>
            <Typography variant="heading-xs">Heading Xs</Typography>
            <Typography variant="subtitle-sm">Subtitle Sm</Typography>
            <Typography variant="subtitle-xs">Subtitle Xs</Typography>
            <Typography variant="body-lg">Body Lg</Typography>
            <Typography variant="body-md">Body Md</Typography>
            <Typography variant="body-sm">Body Sm</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
