import React from 'react'

const Card = ({item}) => {
  
  return (
    <div className="card news_card">
      <img src={item.urlToImage?item.urlToImage:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGRgYGBgYGBgYGBgYGBoZGRoZGRgYGBgcIS4lHCErIxgZJkYmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQxNDQ0NDQ0NDQ0NDY0NDE0NDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEEAAUGBwj/xABIEAACAQIEAwQGBQgHCAMAAAABAhEAAwQSITEFQVEGImFxBxMyUoGRFEKhsbIjU2Jyc4LB0RUkNJKT4fAzNUNUdLPS8SWDov/EABsBAAMBAQEBAQAAAAAAAAAAAAECAwAEBQYH/8QALBEAAwACAgEDAwMDBQAAAAAAAAECAxEhMRIEQVETIjJxgZEzQmEFI0Sxwf/aAAwDAQACEQMRAD8A40ihojWEVxH1YFARTCKEimF0LNQVo2FDWEYBFCwpjUJFYViiKEimEUDCshGhTLS4pxFAy0yZNoisqKmmI1It6CKcUMjMNKh4G1MmRrHrliCKFhTGoSKYgwCKggURq5hWS20uodGWNOXl4is2GI8nzwhK4QKUa5ojfWGpjyqXRFdlGqn2WO/gaBtJU+ydVPTyof0W23U9D/Ksh9SuEhtxyYR2ML7JJkDy8KhYPdbQj2W5eR/nSv0X/dPT+YrCTGVjtsf9cqYXfuPJk5XkMIg/dP8AOscycr6OPrcvj/OkMxgK3wPP/OpZiBDajkw5dBP8KZAdDWYEw2jcm+6pYgmG0afanQ+f86rmQADqvI/6/jUy0dV+0fyptiNllnB9rQ8mHP5URdT7Wh94c/P+dVVzRoZWduc9YrP1dR0O4H+ulMmBsvN7zA+DjbprUM6wMw8mH2A1GCx729EIKt7VthKsdgPGqmcySO6TOnLxFZNhrx0mnz7l8sDqR+8P41dw6oqG46kjZHUgHN0IrRIzT7p6cvCrdx0cZSpRhpmGqGNyR18qLY2P3fv7bLqYxSIIGb3vDpTbuIUgEKAyxDDSfMbGtDcRlMGNgdDO9YHaN6bSF+tS4o6WxcS4SXQhgPaTn+svOrCYMET3P72X5jrXKWbrqcyEgjmOVZcxTsZJ1pXPPDL4/VQl9ybZ0NZRMtDFeYe61ogigNMNQwopi6FkUBFMqCKIrQsihimEUJFYRoAilsKaaBhWFYthQEUwihZaIjQkihNNIoGFMmTaMuXi0A8qXFFFRlpkyNzVcsCso8tSLckctdztTeRD6bGW1KQXVSrroTrHiOhocOqhstxiEOoZROvIird2bam20Ojao2sD9NKqBI7rbciNY8fHypVRZxrSXsAQNVOqz3TzHj5eFLCaZW1HI9KsEAaMNOR584jwrGhdDqOREx5g86byFcFbJHdbUciOXiOvlRKsaMJU8+YHh0o5jxB+f+VQQQNNV5ztPKaZMk5MUQI9pZ+2PvqDbjbVeh38dOVAs7qfCOfjp0qA3QwenKPOmTEfQ1U906fWU/YPGpW3Ps6Hp4+ApBf4HeeXhAqXeNGGu88yTqJpkxGWUsg6TlO2+njJqTbBOuniBp4afxpDXIGuoGgI2FGoYqGUhgTGXd9NZy8hTbA18FhrQ+sJ5yN5PU0XqBt7QmAecDUwOVJssGjKwzd5mRtFAXbU+0fCkDE+JUx46/yFHYGmkXhhxy1G8HcUSWVnTwGVufXyqi2JJ35QJG3+dYcU3nufGjsXp8GxuWEYyAE3MfV8AtLbCqNDFKN7u9xs0oMwZYIJOy9fMUsX8u5IcHVWXSI3JP3UUxqnb2y6MIoK5jAMEkawOen8KsraRZAyMATBYd4jxrWfTYykLkIAggkgmfaM/cKP6ZJJIRjJ720+MUdhSS6Ogd1NVSKYRQGvIS0fWZKddgkUFMNCRTEWgWWhiirABzrCtCyKWaslF6n5UgijsSp0ARQUwihoiNCzQxTCKE0RWLIoCKYaE1ibFEVFMIoCKZCNbJRonQaiNeXiKtgBJRwCrCVcEkKfeWPa6RQouXu3FIVxmUiJnkZ6eFNd2RDbdAVPsOZ0HMpPI1mwqdFP9FpjkZ+R8vComNDtyPT9Wi27rbctdiecjfyoG031HI9R4TWRKnoF5Gh1EToeu2ooZjxG3/roaIkjxB1idPjHOhIjUGf86dEqZgWNRqDuPAdYqQn1gdtSOmuwneo/V8svP/1QjU9DPkKZE20ZlBII0MR5k/dWerGoYQ2gGwHjNSGH1tOeb+FQbsABtRqQPPxphXoJk97UExm8B7tD6nTTUE7c9Oo5VCueWsAkiJAqFujkY01k7nwrIV6CW1EFTrqSDsPnvRW7XMEqY3HM+HSh9cNmEGABA+1quM3q86kLcWFl1lsk66HaabYszt7MxmEZYV1EqgAKxGuoLRuaH6PlDRDpKgtEN1hZ1HOouYpQT6tiUle62jN5geNZcxKux09W5YAKNEUeJOoopjUlvaFthlLHJIE6KxkjzNCMMPEaGT18BUm9G40kjMNZ8jsahcSeWu+m8U+0Q52XmylSHtgtlUIyd0L4sBuarrhS36QnnuTHzqLeJHWBGviemlMbFR4HeRsB8K3CK6b7AOBjYxpqD91A+E19kjwG1G+NMdRJAHPzPOk/Sh4/ZTbROuHwdHFQRTIoSK8g+vci4oTTDQkU6JNCwKYLNQv8afS0xolPsZ6pOgqDh06Ul2iktePKl0y1ZIXaRZOFTpQ/Q18aqNebrVhHMDyo6r5EV4q40ScAvU1Xu4OOdWM5oCayb+RanG+kUjhT1+yoOE8fsqb91gxg0AxTDxp+Tkf00+jDhD1HyqUwmo70DmYplvEhtDoasW2A3/8AXjWbY044roqYoMqi2WBQtIYqAekzvFJxDsO47ZlXRWksAB7tbDEX0ByvqpnUATI2ieVVHdRoY8OcT/GjL4J5ZSbSZSYEaHzHx2NYRHiDpMfHSedWsyjl3SekTHTpRpZUCTB55dwP1vGn8iH0fLplJbZ+rqpO09OoFEmG5g66kjoPjvVtFP1OmvLfkOtBfAXoDAgda3kxfoJLbK/qVPOCBJJJ1PhG1CyKdCNhpED59aJ2JnNvsOUedCGAmQDtrvHkabTJPxXGg3sRoe9poZJAnpSjhozFDpAmdKdmiSp7sjfQnzFWbDq06QeSjattopOGKNVcs8wI201M0FxTJzDXToNvCtzfAk5hrpr0qteQaxBEjWP9RRnJ8ksnpvHpmvNtoMCRpLf62qEtse6hPeIGWfaPLTY1aZhrGg5A60TXO8SRDeGkVXezmeNbMbBhcyXVZbuYazCqvORUrhiAcwz2w4zOo7x8Ax1qwcW+R07rBiCzkS08oY6iqiXoMgxBBA3n4UNMpqE0tE/RAxGQ7tCodwORJ2oBhCDlbukEyd6vHFKVOZIcmcw0j4UPrzHIoGnpJ++h5MesUPlFf6OYEwRBAHP4xSfUnYMdRrOm3IdatC/BkaNPkAD40w3YXMUlVMFl6n9KiqZNzL9im+BZSM4KZoIMaR1pjcPMnIQ6gxm2n4VK33cgKczN3QCdh8dKQWOwTbQ+Y3p0n7si/H2R37cLT8+n+vjQNwxPzy/KqrEUdm0zsFVSzHZVEk89B8K83y+EfYvEktugzw1Pzy0DcOT86vyq7/QmJ/MXf7jVB4LiQJNi7A/Qb+VH7/gj/sv+9fyjXnAKP+IPlWHDj3x8qh2AkHQjQg6EHxFXhwjEkAjD3SCJBCMQRQ+5+w2sWNc0uf0NW+EB+uPkaU2FA+uPka3D8KxKiTh70fs2/lWruXl1BGuxBEEHoelMnS7RJzirbVplVrK++KcqCB3hRYbhOIuqWtWXdQYlELCd4kc9RV1ez+Lgf1a9/cb+VM02c0ZImnul/JRKjrQsKv3uEX7alrli4ijdmUgCdBJNIgUjTR1x45FuWjT4lO8aSUrp/wCg7zKHFi4VIzBgrZSN5npWuNlegp02cjxqqfi0zSlauYd5Gu4rZ4Xg128CbVlnAMEqpaD0MUu9w5rLBbtt0J1hlIMHmAaL6FhJX47RTu3wqspRWziAx3TxFa8yAAZKEkjlNdCOFXb0+psvcRTrlUmDymNjVMcCxCXFRrL5mBKoUOYjnC/DetPRPNp1raKWHtZddCY6bT/Gmt1B051ssVwe/aUvcsXESQCWUqJOwmpw3BL9xBdtWrjDN3ciMymNCQ229bkafFT2v5NcrrBOxkQsb/GqN18zQ2jZtzoAPGmY9mzHNIaTmEQQRuCOVHguDYi+pezYuXFBylkQsJ0MEjnqPnTzJz582lpFJwRPMTGYag+RqF6zpOx5/Cn4mxdsP6u8joRDm24KzOxI8amxhfWD8nma4W0tIjMY6iKc5E0+UxOYbjQzoP8AOsa7qZ9qd5+dbO72axqjM+FvqJ1coxAHUgCqD4Rhny99FaGdRpPmdRWaDNN8yPVyymDKyJNLyDUjTXQHU0q0w70GB0J1NMDAzIIMaRAHxFTa0zpV+SWxeJMk5gc3LlHwqsXIkaGd+cfGrr2yJmDI33j+VVrqD6vTWaea9jnzQ+0ILDWDAjnU3AV9pSMwBXl8fGs7vMcuVWIKqr5laQVCk5io21B2qxzpbGWsKzSttg8qGaNMvhr/AAqUVDJPdgaRJk/wpFsqAMuYNrmM6EdBRo6ipPs6Yc6Q29abmMxYSDuQPhVfFOAAELZdCVbbMPCmJiQplSQYjTxqvcIijPYmap0/ETcuZ2zGBJ1gQPlV0402u7ZvMU3nLGp30qkVFTC1fRyRTR35wFz3G+VbrsfgnGMsFkIAZpOn5t62zMKt8AcfSbfm34WrghapH0nqc91hpa9mdZxziyYWybrqzAFVhAC0sYG5Aql2f7TWsWzKiXEKgMc6qJBMaFWNbLilyyqE38mSROcArPLeqvCsXg2Yrh2tZiJIt5QSBz0rr9z5hLcPh7+fY4P0qcPVbtq6i951cOBGuXLlY+OpFek8N0s255W1/CK8+7dYS+t0XLrhkaVQqMoSNcpBO+5nnFeh4ITatj9BfwihK+5l8tbwwm/k53hnbnDYi6tlVuqzEqpdAFJE6SCd4rUek/gCNZ+lIoFxCA0fXRiF16kEgz51vuHdjMNYuLdUOWUyuZpAPWIrVekjjiJa+jAg3HKlh7qAzJ8yI+davxewYnrLP09k+ihSMI8iPyz/AIVq/wAd7b4bCXjYuLcLhVY5FBENtrI6VX9GjA4V4/Ot+Fa2HFuIcOS4VxD2BcgEhwuaOW42rT+KDlSeetpvn2OQ7VducPicLcs20uhnywWQAaMCZM9BXF8EwD371uyJ77AHwXdj8ga6vt5jsE62vorWiQzZ/VhQYgRMDrV/0X8OzO+II0UZE8zqxHwgfGo1ur0eniucPpauU1/h/J6FbVVC2xAhdF8FgbdBI+dfP3bDANhcZdsj2M2dP1H7y/Iyv7tem43G4gcZtRauGwto2i4R8kuM5bNEQCqCfOtf6YuEZrdvFKNbberc/oOe6fg34qra2jzfS28eRc9hehlibOIn84v4Kr9vOF38VxK1YtTlNpWdvqoA7yzH+HParHoXP5HE/tF/BXoF25aR1zFFe53VmAz5QWCjmYGYx50Uk5SBky1GeqXZz3EcbhuEYTQbaIv1rjkbn7yeQrzzsPxC7iOJ2711izvnLcgBkaFUclFXfS9wa/69MTmZ7JATLytHmPJt56iOla30cgfT7Mfp6f8A1tU6f3JHRhxp4ayN7bTO+9K7EYEkbi7a+80/0YMW4fbJ3LXSf8RqR6WD/UD+1tfeasei7/d9v9e7/wBxqf8Av/Y5/wDjfv8A+HL+lTsaXnG4dZZR+XQD2gP+Io6jmOY15a7H0Ka4K5/1Dfgt11+B41ZvXb+HU/lLDBXQ7kMoYMBzU5o86jgPA7eE9atrRLl03cnJSyqCq+ErPhMU3it7IPI3PizyL0lYB8RxhbFv27iWUE7CQ0sfACT8K9P4PwbC8Mw5Iyqqrmu3m9po3Zj9wFctiSo7SJmj+zws+9keI+E1svTBm/o5su3rLef9XNz8M2WiHl6kscI9JGAxF0WVZ1ZjlQ3Eyq55BTJif0orhfSricGbmXDt+WB/LhIFthGmeNC4Mbct+VJ9H/YaxjsO165duoy3WQBCgEKqMD3lJmWPyrZdrPRnhsLhL2IS9fZ0UMA5t5SSwGsIDz60vLRSXMXwzzJRrJ002Aq3ctskFwDmHd1nSgu3HIR7ikrGVTEAx0Ma1jp3Q2YamI5io0elGtPQ+/kVVKPLEd4bRS3dHVEK5Y9pxqT8KQRQ0pqyN+3BVY5WH1lU6AzBH8KAvqTEeAp9wa0l0rpl8Hn1w2g0appSCiqb7KS/tJK1DrUVDtTT2LTXiLZaiaLNUTVUc56ASep+dbjsaf67Y/Wb8D1qvUN7jf3TUi3dUhlDqw2ZcysOWhGorzI+1pn2+eFkxVCa5Wj2bjvB0xdk2bhIUlWlSAZUyNwa1fAuxeHwtz1qF2YKVGZgQA2+gAry44jGfn8T/i3f/KlvexREG9iCOhuXSPtaur6096Pn1/peZLxVrTO19KnFbRtLh1YNczh2AM5QARr0JJ2867rAH8hb/Zr+EV4KmCYbq3xBNXGxeK2F6+BtHrLgEdAJoLMttse/9Kr6cyqXB0Po87U3FvtYxF13W6xyM7MxV5jLLcm6ciPGug9JXZr6RZGItibtkE6bvb3ZfEjcfEc68v8Ao7DkZ3577zNOfG4v/mMT/jXf/Kssq1pgyegqbVw0j0r0Sn+qP+2b8KVsuN9iMLirpv3fWZyFU5XyiF20ivG7GIxCAql28gJJIS46Ak7khSAT404cQxX/ADOJ/wAa7/5UfqTrTRKvQ5HkdzWtnd9pewmFw+Gu3rYuF0WVBeQSSABEa712PZzADC4S3bMAquZz+ke85PzNeIvj8QwhsRfI6NduEaajQtVjBXcXfdLK4i8TcOUB71zKZB0bU6Vpud8IOT0WVxq64XJ0970tsGYLhFKgmD60gkToYyaSK9Bxlm3jsGV3W/akHpnUFT8DHyrxnj3YvFYVDeuKhSQCUYtlnQFhAgTzrU4TH4qUtW8ReQFlRFW9cVRmIVQAGgCTyplTX5EK9NjpeWJ9HpfobsMiYpGEMl4Kw6MqwR8xXP8ApfxVxMdZdGZWS0rKQfZbO2oHwFIxnZHiuGt3b5xGVVVrlwpiLoZso1ZojM0Dma1PBuzmN4kGuLcz5CEJvXXLCRmABM6a0W3rSQsxLt5G1o9c7N8WtcUwZFwAkr6u+nRo3HQH2gf5Vw/Z7grYPi9u02o/KNbaNGQo8HzGx8arYL0d8UtEm3cW3I73q79xS0bA5QJo8f2V4jZtvfxGIcm0pZWXEXGZBEMQTqNOlZt8No2NSvKVS0/Y7H0uH/48/tbX3mn+ir/dtr9a7/3Griz2L4ndtw91bqOAwL4i64HMEKdCa1vAeCY29mTCYlwtpgroL9y1lYySAq6DUHXrNDyflvRvpT9FyqXD2Vu1XEL2G4xiMRZMMlxJ6MDbSUYcwdq9l7L8ftY6wt62YOzpPeRxup/nzFeG8X7PYj6cMK3ev3MpBe4WzSvtFyJI7p+VbLj3AMdgVbEPcSwrZEjDXXQuwmJAidMxoqn8EqxQ0knz/wBjfSdjHscWF62YdEssvmJ0PgdR8a9Q4HxzC8Tw5XutmXLestGZZ3BHMdCK8tHo84nfC3ndXLKpDXLzlwpEgEsCRE7TXP8AD+C4h7/q8KWe8rMHa0SoSGy5vWaQpjfTaim0zPHLjh8o9kwPYDh+Fb14DQhzgXLrG2n6RB0MfpTtVv0iAHhuJk93IJI10zLtXnON9H/GbqRdxAuDTuPibjbbe0Ms1zfHsLxPDjJi2xPqzAOa672mAO2bMVPkabZGY3S5Rqrdt8gue1bRoAY6dYy1DmSTETrHL4Ui86ljkBC8gTNXM4JLODqNMojXlUaPShp8CRQGjFQ1KBle5pSyaZfG1Kq0vg5L/JkKKyn2l0oblulb5KTP27FUu5TKC7Rnsnf4sTWVlZFWOY9XPHH91fmaE8af3B8zWrNZXl7Z959CPg2P9MP7q/M0J4s3uj7a19ZR2Z4YXsXX4k3uilniDe6KqtUGiJWOV0iw2OboKQ+MPQUtjSrlZEKlEviyeQqRdMbVWY01DoKZko7YRfwrbdkz/XcN+0H3GtPW37Jf23DftB9zUY/JA9T/AEq/RnuN+ytxSrgMrAqykSCDoQRXiXaDsu2Bx1jKC1i5iLRttvlOdSUY9RyPMeVes9qOLnCYZ74XPkKSsxKl1VoPWCfjRYe7h8dh0cRctsVdZ3VlIYeIYEfZXY0mfLY8lY+V0+BfbX+wYr/p7v4DXHehL/YYj9qv4BXZdtP7Biv+nu/gNcf6E1jD4j9qv4BQf5Iaf6NfqbXtf2txOEvrbs4J76m2HLqtwgElhllVI5fbXJ9oO3WJu2Llm9gWtJdUpmb1iwT0zoATptXcdpO2+HwV0Wrq3CzIHBRVIgkjmw10rhu2vbPD420iWkcFbgc+sCgEZWWO6x17woU+OyvpsflU7nj5Ox9GfEjcwa23ZWez3DBk5N0J+Gn7taPBj6Dxt0Ai3i0zDoGOo/8A0rD9+uf9HfERh8Ukt3L35Nl6HdG+en71d92y7ONib2DuJINq8M7DcW/bJ/vIB+9SxXkv0Gz41iytPpo2mI4Cr461jDE27Ny3HMlyuU/AG4P3q4ft3cON4phMAuqWyLl2NRr3mnyVY/fr01sQgcWywzsrOqz3iqlQxA6Asvzrk+C9mGtcUxeLaStxLfqyer/7QfD1ajyNV7OOXp7LvbzjX0PA3HUw7D1dv9d9BHkJPwqj6K+HJa4fadQM17NcduZJYgAnwAA+dcJ6Y+M+txKYZT3bC5n6G44G/ksf3jS+wvbHEYKwQ9h7uEVyM6DW2x7zKDsRrMGNTvypfL7iv0q+ntHb9oe2GOwl9g3DnuYcHu3bbFiVj2jlUheehjauM7edsxxFLeHwgbKZe6rAK2ZfZU6wY1PnFekcB7b4HFsEt3oc7W3BRyd4E6MfImtL6TOy1l8PcxKIqXrS5yyjLmUHvK8b6E670a3rgGPxVJUjxKxaBcK7ZROpiY+AqxeY+zmkLoPKoa2yn1ZAJBBJXvfaKEmoN7PUUqVpECoJpr3M0aAQI0H30LLSga+CpdOtLaiNZFdErg4K5YeHorrUCbULGpvstL+1CzQXaZFBcFGeydr7WIIrKmsirnM0egVlZWV5Z+gkVlTWAVgUtgmhJostFlFbZNyyuaU5q2VFVb8cqaXyc+WdLZXc05dhSSnlT1XQU9dHND5ZBradlbirjMOzEAC4CSTAAg7k1rMlLZK08PYcs+cOflaPWvSTxGy/Dr6rdRmISArqSfyiHQA15t2E7WnA3MrEth3PfUalDtnUeHMcx41zuIwveJ0oVsx0q7rb2jx59KpThvZ712t4th3wGJCX7bFsPcygOpJlDAAma5T0OY62li+LlxEJugjOyqSMg1EmvNDZXoPsoHC9BW8+dir0aUOd9n0Ljl4deYPdOGdgIDMbbGOkk7Vpe0OC4auFvm2uGDi1cK5PV5s2UxljWZrxJcvQfKnCyh5Cs7/waPSNNapjLd9hDKYIMg8wRsa954B2ks3sPbuPcRXZBmVmUEMNG0J6ia8GVQfOsVMvfKKw1WG116xSTXidPqPTLMlt9HX8c7XkcXTEK02rLCzpqDbOlxh8STp7or1fEcdw6ozC9bYqpYAOkmBIAE86+cwkeyYJ00qrctKq5ShDhtTOkdMsb+NUmzkzekXGukicdiXu3bl1/bdmZuYkk6eQ2+Fe0dhO0nDUw1vDreVGA763gELM2rGT3Wk+O1eJARWNrQT0wXE1CnetH0jawHDlcX1TDK4ki4vqwR4hhtXGek3ttZ+jthbDesa6MrOuqKkiYbZidoG3OvGmtjoKctwyubvBdlJMR08BVPI5pxJPllnAXmtjMjLLggrEkD5VjEREENOpO3yqEA1b2TMgD7hRyR3mXNmBgk8+tQfZ6McToC6mUxmB8RtQ4q8pgKCNNZMz40TKgQHNLkxkj7ZpONwr22yuuVoBjTY7U0zsllppPQmagmhmoL1ZHHsJWrDUIaOfCpPstPRFKu00nwpd3ajPYt/ixFRFFWVU5jv6ipqK8w/QDJqCaw0LNRQl3ow0tzUM9KdjyplJyXk4JYmpXDFtzSCrUaOwEEGn0cqtN8jPoXjTRh6UGc7A1BL+6aDTY6y45GPYPKl+oaol/dPzqM1z3TRUsSs0fIjE4FyZFV2wLir3rLnun51DO/u0y2c9eFPezWHDtUfR2p9yzcJJpD5xvTJEG0Le0RQo5FE2Y0GQ02hW9DhdO9WMPdDzMAgTqdDHIeNUKlFBIBMAmCd48aDlDTmaZswQZLAjTSBoTVTEJmM86bcxTkBMxe3b2IEd2d55fGhVg+YghQomGYTHQdTSpNcjVc2tFFhQ1bJU9KA21/0adM5axafDK5FGlrmaZ3R0oTcFZtsVTM8tjIoGuQRrtrFKdyfClxRU/IKy6/Ec90O5Z9JBgKAADy06VKq0eszAwYgkFtt8p5UiKjLTrgj5t9mMtQtuasYa5lcM6hwBGVtoobrySQoAJ2Gw8KDbCpnW2/2IFoDnUerHWooSD0pfFj+UpBFB1oHtg86iD0rIPSjpiupYv1dR6vxphB6VGU9KdNkHM+x3NRWVlecfeV0CxpLvWVlNJxXTEs9K9YRWVlVRy2YcS1Yb79D8qispiFBDGuPq1hx9z3aysrIlRH0+57v2VH9IXfdrKyiSZDY257tA2Nf3KyspkAy3jCZzd3QkaEyeQ8POk3XbL3lYMdVMd0rz8zWVlAKKpuMKE3TWVlMKwagmprKxNmK5EwSJ0MHcdD1qziL9t0totpUZfbcEkvPMjlWVlBgTegbt93UW5LpbkjKuwO5mJjzpGQMTEAAT3j9niaysrINdoPBC2WPrSwWDGQAmeW9LFglC4jKDG4nXbSprKKB4p9goFysWJDaZQBoesnlUMpABOx2qKyiiVJATWA1lZTEwpoc5rKyiBko0mCY31P3ULX2JkyfOsrKYz6B9Yaj1pqKylEZnrDUesNZWURT/2Q=='} className="card-img-top card_image" alt="..." />
      <div className="card-body">
        <a href={item.url} target={'_blank'} className="card-title news_title">{item.title.substring(0,99)}</a>
        <p className="card-text">{item.description?.substring(0,120)}</p>
      </div>
    </div>
  )
}

export default Card
