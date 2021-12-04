import { render, screen } from "@testing-library/react"
import { Counter } from "./counter"
import { Provider } from "react-redux"
import { store } from "../app/store"
import userEvent from "@testing-library/user-event";


test('should render the initial value of count = 0', () => {
    //Arrange
    render(
        <Provider store ={store}>
            <Counter />)
        </Provider>
    );

    //Act ... Nothing

    //Asserts
    const number = screen.getByText('0');
    expect(number).toBeInTheDocument();
});

test('should add 1 when clicked increment button', () => {
    //Arrange
    render(
        <Provider store ={store}>
            <Counter />
        </Provider>
    );
    //Act
    const buttonInc = screen.getAllByRole("button")[1];
    userEvent.click(buttonInc);
    //Asserts
    const number = screen.getByText('1');
    expect(number).toBeInTheDocument();
});

test('Reset "Number to 0', () => {
    //Arrange
    render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
    //Act
    const buttonReset = screen.getAllByRole("button")[0];
    userEvent.click(buttonReset);
    //Asserts
    const number = screen.getByText('0');
    expect(number).toBeInTheDocument();
});

test('should substract 1 when clicked decrement button', () => {
    //Arrange
    render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
    //Act
    const buttonDec = screen.getByLabelText("Decrement value");
    userEvent.click(buttonDec);
    //Asserts
    const number = screen.getByText('-1');
    expect(number).toBeInTheDocument();

})
