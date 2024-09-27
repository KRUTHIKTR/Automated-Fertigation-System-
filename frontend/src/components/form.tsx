import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

function Form(){
  const form = useForm({
    defaultValues: {
      N: 0,
      P: 0,
      K: 0,
      Humidity:0,
      pH:0,
      Latitude:0,
      Longitude:0

    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })
  return(
    <form
    onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}
    >
      <Card className='bg-transparent backdrop-blur-xl text-white border border-ring'>
        <CardHeader className='text-white'>
          <CardTitle className='text-2xl'>FERTIGATION FORM</CardTitle>
          <CardDescription className='text-white'>Enter the values</CardDescription>
        </CardHeader>
        
        <CardContent className='grid grid-cols-3 gap-4'>
          <form.Field
              name="N"
              children={(field) => (
                <>
                  <Label>
                    Nitrogen
                    <Input
                      className='mt-2'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    />
                  </Label>
                  
                </>
                
              )}
            />
            <form.Field
              name="P"
              children={(field) => (
                
                <>
                  <Label>
                    Phosphorus
                    <Input
                      className='mt-2'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                />

                  </Label>
                  
                </>
              )}
            />
            <form.Field
              name="K"
              children={(field) => (
                <>
                  <Label>
                    Pottasium
                    <Input
                      className='mt-2'  
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                />
                  </Label>
                  
                </>
              )}
            />
            
            <form.Field
              name="pH"
              children={(field) => (
                <>
                  <Label>
                    pH
                    <Input
                      className='mt-2'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    />
                    </Label>
                  
                </>
              )}
            />
            <form.Field
              name="Latitude"
              children={(field) => (

                <>
                  <Label>
                    Latitude
                    <Input
                      className='mt-2'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    />
                  </Label>
                  
                </>
              )}
            />
            <form.Field
              name="Longitude"
              children={(field) => (
                <>
                  <Label>
                    Longitude
                    <Input
                      className='mt-2'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="number"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    />
                    </Label>
                  
                </>
              )}
            />
            
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>

      </Card>
    </form>
    
  )
}


export default Form