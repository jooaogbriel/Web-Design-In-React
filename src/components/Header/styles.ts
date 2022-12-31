import styled from "styled-components";

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    background-color: black;
}
.container{
    width: 100%;
    height: 100vh;
    padding-left: 8%;
    padding-right: 8%;
    box-sizing: border-box;
}
.navbar{
    height: 12%;
    display: flex;
    align-items: center;
}
.logo{
    width: 50px;
    cursor: pointer;
}
.menu-icon{
    width: 30px;
    cursor: pointer;
    margin-left: 40px;
}
nav{
    flex: 1;
    text-align: right;
}
nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 60px;
}
nav ul li a{ 
    text-decoration: none;
    color: #fff;
    font-size: 13px;
}
`