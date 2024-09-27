import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import {useEffect} from "react";
import axios from "axios";


function Form(){

  const form = useForm({
    defaultValues: {
      N: 0,
      P: 0,
      K: 0,
      Humidity: 0,
      pH: 0,
      Latitude: 0,
      Longitude: 0

    },
    onSubmit: async ({ value }) => {
      console.log(JSON.stringify(value))

      try {
        const response = await axios.post('http://localhost:8000/api/form', value);  // Use Axios to post data
        console.log(response.data);  // Log response data
      } catch (error) {
        console.error('Error submitting form:', error);  // Handle error
      }
    },
  })
  useEffect(()=>{
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        form.setFieldValue('Latitude',position.coords.latitude);
        form.setFieldValue('Longitude', position.coords.longitude);
      });
    }
  }, [])
  return(
    <form
    onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    }}
    >
      <Card className='px-6 bg-transparent backdrop-blur-xl text-white border border-ring'>
        <CardHeader className='text-white'>
          <CardTitle className='text-2xl'>FERTIGATION FORM</CardTitle>
          <CardDescription className='text-white'>Enter the values</CardDescription>
        </CardHeader>
        
        <CardContent className='grid grid-cols-2 gap-4 gap-x-8'>
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
                    Potassium
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
              validators={{
                onChange: ({value}) =>
                  value > 14 || value < 0 ? 'Invalid ' : undefined
              }}
              children={(field) => (
                <>
                  <Label>
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : undefined}
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
              <h1></h1>
              <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                      <Button type="submit" disabled={!canSubmit}>
                          {isSubmitting ? '...' : 'Submit'}
                      </Button>
                  )}
              />
          </CardFooter>

      </Card>
    </form>

  )
}


export default Form