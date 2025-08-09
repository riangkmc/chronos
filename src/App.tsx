import { Container } from './components/Container/index.tsx'
import { Heading } from './components/Heading/index.tsx'
import { Logo } from './components/Logo/index.tsx'
import { Menu } from './components/Menu/index.tsx'

import './styles/theme.css'
import './styles/App.css'


export function App(){
    return(
        <>
        <Container>
                <Heading>
                    <Logo></Logo>
                </Heading>
        </Container>

         <Container>
                <Heading>
                    <Menu></Menu>
                </Heading>
        </Container>
        </>
    )
}

