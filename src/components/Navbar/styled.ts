import styled from "styled-components";
// import '../../scss/_variables.scss';

export const StyledNavbar = styled.div`
  padding: 57px 44px 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: rebeccapurple;

  .navbar-logo {
    height: 40px;
  }

  .navbar-menu {
    display: flex;
    gap: 40px;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .item-link {
    position: relative;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
  }

  .item-link::after {
    opacity: 0;
    position: absolute;
    top: 110%;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #f5bd41;
    transition: all 0.3s ease-in-out;
    transform: translate(0, 100%);
  }

  .item-link:hover::after {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
