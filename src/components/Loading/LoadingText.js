import React from 'react'
import { LoadingContainer } from './styles'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function LoadingText() {
    return (
        <LoadingContainer>
            <Box sx={{ width: 250 }}>
                <Skeleton animation="wave" />
            </Box>
        </LoadingContainer>
    )
}
