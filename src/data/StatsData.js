import React from 'react'
import {DiNodejsSmall} from 'react-icons/di'
import {DiCode, DiAtom, DiAngularSimple} from 'react-icons/di'

export const StatsData = [
    {
        icon: (<DiNodejsSmall
        css={`
            color: #047bf1;
        `}
        />),
        title: "Content",
        desc: "Tysiące linijek contentu dla naszych klientów"
    },
    {
        icon: (<DiCode
            css={`
            color: #F3a82e;
        `}
        />),
        title: "Link",
        desc: "Tysiące linków poprawiających pozycje klientów"
    },
    {
        icon: (<DiAtom
            css={`
            color: #f34f2e;
        `}
        />),
        title: "Performance Optimization",
        desc: "Dziesiątki przyśpieszonych stron"
    },
    {
        icon: (<DiAngularSimple
            css={`
            color: #3ef576;
        `}
        />),
        title: "Structure Optimization",
        desc: "Dziesiątki poprawionych i zrestrukturyzowanych stron"
    },

]