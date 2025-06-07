import { render, screen } from '@testing-library/react'
import HelloWorld from '../src/components/HelloWorld.jsx'
import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
  it('renders message', () => {
    render(<HelloWorld msg="test message" />)
    expect(screen.getByText('test message')).toBeTruthy()
  })
})
