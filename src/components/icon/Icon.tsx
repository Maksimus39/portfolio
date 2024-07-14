import React from 'react';
import iconsSprite from './../../assets/images/iconsSprite.svg'

type IconProps = {
    iconID: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconProps) => {
    return (
        <svg width={props.width || "30"} height={props.height || "31"} viewBox={props.viewBox || "0 0 30 31"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconID}`}/>
        </svg>
    );
};

