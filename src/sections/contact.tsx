import { Button } from "../components/button"
import { CentralSection } from "../components/section"
import { StyledTittle } from "../components/texts"

export const Contact = () => {
    return (
        <CentralSection>
            <StyledTittle>If you are interested, please feel free to contact me.</StyledTittle>
            <Button onClick={() => {
                window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=xavier.w3b.contact@gmail.com",
                    "_blank"
                );
            }}>Contact Now</Button>
        </CentralSection>
    )
}