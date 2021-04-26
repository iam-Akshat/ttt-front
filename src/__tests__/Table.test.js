import Table from '../components/Table';
import { screen,render } from '@testing-library/react';
describe('Table',()=>{
    it('renders numbers and corresponding pass/fail as passed in props',()=>{
        render(<Table validNumsArray={[35,34]} resultArray={['Pass','Fail']} />);
        expect(screen.getByText('Pass')).toBeInTheDocument();
        expect(screen.getByText('Fail')).toBeInTheDocument();
        expect(screen.getByText('35')).toBeInTheDocument();
        expect(screen.getByText('34')).toBeInTheDocument();
    })
})