const ERRORLIST = {
  url: [
    {
      code: 'url1',
      type: 'error',
      message: 'The URL input should not be empty'
    }
  ],
  limit: [
    {
      code: 'limit1',
      type: 'error',
      message: 'The limit input should not be empty'
    },
    {
      code: 'limit2',
      type: 'warning',
      message: 'Avoid using 0 on the limit input'
    },
    {
      code: 'limit3',
      type: 'error',
      message: 'Invalid entry on limit input'
    }
  ],
  interval: [
    {
      code: 'interval1',
      type: 'error',
      message: 'The interval input should not be empty'
    },
    {
      code: 'interval2',
      type: 'warning',
      message: 'Avoid using an interval smaller than 5000'
    },
    {
      code: 'interval3',
      type: 'error',
      message: 'Invalid entry on interval input'
    },
  ]
}


export {
  ERRORLIST
}
