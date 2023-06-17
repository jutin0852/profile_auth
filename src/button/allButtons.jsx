import React from "react";
import Button from "./button";
import { FaCartPlus } from "react-icons/fa";
import buttonCss from './buttonCss.module.css'

export default function AllButtons() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button variant={buttonCss.default} type="" style={{ color: "black" }}>
        Default
      </Button>
      <Button variant={buttonCss.outline} type="variant='outline'">
        Default
      </Button>
      <Button
        variant={buttonCss.text}
        style={{ color: "#3d5afe" }}
        type="variant='text'"
      >
        Default
      </Button>
      <Button disabled type="disabled">
        Disabled
      </Button>
      <Button variant={buttonCss.text} disabled type="variant='text' disabled">
        Disabled
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        startIcon={<FaCartPlus />}
        type="startIcon='cart.png'"
      >
        Default
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        endIcon={<FaCartPlus />}
        type="endIcon='cart.png'"
      >
        Default
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        size={buttonCss.sm}
        type="size='sm'"
      >
        Default
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        size={buttonCss.md}
        type="size='md'"
      >
        Default
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        size={buttonCss.lg}
        type="size='lg'"
      >
        Default
      </Button>
      com
      <Button
        variant={buttonCss.default}
        size="md"
        style={{ color: "black" }}
        type="color='default'"
      >
        Default
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.primary}
        size="md"
        type="color='primary'"
      >
        Primary
      </Button>
      <Button
        variant={buttonCss.default}
        color={buttonCss.secondary}
        size="lg"
        type="color='secondary'"
      >
        Secondary
      </Button>
    </div>
  );
}
