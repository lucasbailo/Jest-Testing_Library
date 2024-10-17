import { render, screen } from '@testing-library/react'
import Menu from './index';

test('Deve Renderizar um link para pagina inicial', ()=>{
    render(<Menu/>);
    const linkPaginaInicial = screen.getByText('Inicial')
    expect(linkPaginaInicial).toBeInTheDocument();
})

test('Deve Renderizar uma lista de links', ()=>{
    render(<Menu/>);
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4);
})


test('Não deve Renderizar o link para o Extrato', ()=>{
    render(<Menu/>);
    const linkExtrato = screen.queryByText('Extrato')
    expect(linkExtrato).not.toBeInTheDocument();
})

test('Deve renderizar uma lista de links com a classe link', ()=> {
    render(<Menu />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot()
})
