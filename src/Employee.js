import React from 'react';

export default function Employee(props) {
  return <li>{props.prenom} - {props.salaire}</li>;
}
