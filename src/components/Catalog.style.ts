import styled from 'styled-components';

export const CoreApp = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h2{
    font-size: 6rem;
    color:  #303030;
    letter-spacing: 1rem;
    text-transform: uppercase;

      span { 
        display: block;
        text-align: right;
      }
  }

  section {
    display: block;
  }

  article {
    display: block;

    width: 250px;
    height: max-content;
    border-radius: 1rem;
    
    margin: 1rem;
    padding: 2rem;

    background-color: rgba(179,187,204,0.1);

      img {
        margin: 1rem auto;

        height: 100%;
        max-height: 250px;
        background-size: cover;
        border-radius: 1rem;
      }

      strong{
        letter-spacing: 0.1rem;
        color: #303030;
      }

      span{
        margin: 0 1rem;
        padding: 0.3rem;

        background-color: rgba(179,187,204,0.5);
        border-radius: 0.2rem;
        color: rgba(255,255,255,0.9);
      }

      button{
        padding: 0.5rem 1rem;

        background-color: rgba(204,177,170, 0.8);
        color: #303030;
        border: none;
        border-radius: 1rem;
      }


  }


`;