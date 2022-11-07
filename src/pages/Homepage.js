import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getSpaces } from "../store/spaces/thunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSpaces } from "../store/spaces/selector";
import { style } from "@mui/system";
import Space from "../components/Space";

export const Homepage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(getSpaces());
  }, [dispatch]);

  return (
    <Container>
      <h2>Spaces</h2>
      {spaces.map((space) => {
        return (
          <Space
            key={space.id}
            id={space.id}
            userId={space.userId}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            created={space.createdAt}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
