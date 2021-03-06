import React from 'react'
import styled from '@xstyled/styled-components'

export const InnerSiblingNavLink = styled.aBox`
  font-size: 18;
  transition: fast;
  text-decoration: underline;
  color: on-background-primary;

  &:hover {
    color: on-background-primary-dark;
  }

  &[data-type='next']:hover {
    transform: translateX(2px);
  }

  &[data-type='previous']:hover {
    transform: translateX(-2px);
  }
`

export const SiblingNavLink = React.forwardRef(
  ({ type, children, ...props }, ref) => {
    return (
      <InnerSiblingNavLink
        ref={ref}
        as="a"
        data-type={type}
        gridArea={type}
        {...props}
      >
        {type === 'previous' && '← '}
        {children}
        {type === 'next' && ' →'}
      </InnerSiblingNavLink>
    )
  },
)

export const SiblingNav = styled.navBox`
  display: grid;
  grid-template-areas: 'previous next';
  justify-content: space-between;
  margin: 5 0;
`

export function useSideNavPrevNext(navGroups, pathname) {
  const nodes = navGroups.flatMap((group) => group.children)
  const nodeIndex = nodes.findIndex((node) => node.slug === pathname)

  return {
    prev: nodeIndex > -1 ? nodes[nodeIndex - 1] : null,
    next: nodeIndex > -1 ? nodes[nodeIndex + 1] : null,
  }
}
