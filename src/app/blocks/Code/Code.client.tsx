'use client'
import { Highlight, themes } from 'prism-react-renderer'
import React from 'react'

type Props = {
  code: string
  language?: string
}

export const Code: React.FC<Props> = ({ code, language }) => {
  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <pre className="bg-background p-4 border border-border rounded-lg">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: 'table-row', line })}>
              <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
              <span className="table-cell pl-4">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
