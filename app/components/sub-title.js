import Title from "./title"

export default Title.extend`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;

  @media (min-width: 920px) {
    margin-left: -1rem;
  }
`
