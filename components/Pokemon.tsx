import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_REPO = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      image
    }
  }
`;

type Props = {
  name: string;
};

const Pokemon = ({ name }: Props) => (
  <Query query={GET_REPO} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      const {
        pokemon: { id, name, number, image }
      } = data;

      return (
        <div key={id}>
          <h1>{name}</h1>
          <p>Pokemon #{number}</p>
          <img src={image} />
        </div>
      );
    }}
  </Query>
);

export default Pokemon;
