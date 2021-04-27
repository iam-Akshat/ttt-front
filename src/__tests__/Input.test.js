/* eslint-disable no-undef */
import Input from '../components/Input';
import { screen, render, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFetchResults } from "../queries/useFetchResults";

jest.mock('../queries/useFetchResults')

describe('Input', () => {
    beforeEach(()=>{
        useFetchResults.mockImplementation(()=>({a:1}))
    })
    describe('Invalid input', () => {
        it('should display error when typing invalid input', () => {
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            userEvent.type(input, '1,a')
            expect(screen.getByText('Only numbers and commas allowed')).toBeInTheDocument()
        })

        it('should remove error when invalid input is corrected', () => {
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            userEvent.type(input, '1,a')
            expect(screen.getByText('Only numbers and commas allowed')).toBeInTheDocument()
            userEvent.clear(input)
            expect(screen.queryByText('Only numbers and commas allowed')).toBeNull()
        })
        it('should disable submit button when input is invalid', () => {
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            const submitButton  = screen.getByRole('button')
            userEvent.type(input, '1,a')
            expect(submitButton).toHaveAttribute('disabled')
        })

        it('should re enable submit button when input is corrected', () => {
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            const submitButton  = screen.getByRole('button')
            userEvent.type(input, '1,a')
            expect(submitButton).toHaveAttribute('disabled')
            userEvent.clear(input)
            expect(submitButton).not.toHaveAttribute('disabled')
        })
    })
    describe('Valid input',()=>{
        it('shows result on succesfull fetch',async ()=>{
            useFetchResults.mockImplementation(()=>({
                isSuccess: true,
                data:{
                    data:{
                        validNumsArray:[4,6],
                        resultArray:['Pass','Fail']
                    }
                }
            }))

            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            const submitButton  = screen.getByRole('button')
            userEvent.type(input, '4,6')
            userEvent.click(submitButton)
            expect(await screen.findByText('Pass')).toBeInTheDocument()
        })
        it('shows loading when component is fetching', async ()=>{
            useFetchResults.mockImplementation(()=>({
                isLoading: true
            }))
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            const submitButton  = screen.getByRole('button')
            userEvent.type(input, '4,6')
            userEvent.click(submitButton)
            expect(await screen.findByText('Loading...')).toBeInTheDocument()
        })

        it('shows error when fetching is failed', async ()=>{
            useFetchResults.mockImplementation(()=>({
                isError: true
            }))
            const { container } = renderWithQueryClient(<Input/>)
            const input = container.querySelector('input')
            const submitButton  = screen.getByRole('button')
            userEvent.type(input, '4,6')
            userEvent.click(submitButton)
            expect(await screen.findByText('Server Error')).toBeInTheDocument()
        })
    })
})