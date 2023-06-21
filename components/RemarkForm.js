import React, { forwardRef } from 'react';
import { Form, Formik, Field } from 'formik';
import { Input, FormItem, Select, FormContainer, Button } from 'components/ui';

const RemarkForm = forwardRef((props, ref) => {
    const { initialData } = props;
    const options = [
        { value: 'foo', label: 'Foo' },
        { value: 'bar', label: 'Bar' },
    ];

    return (
        <div>
            <Formik initialValues={initialData}>
                {({ values, touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            <FormItem label="Statement">
                                <Field name="select">
                                    {({ field, form }) => (
                                        <Select
                                            size="sm"
                                            field={field}
                                            form={form}
                                            options={options}
                                            value={options.filter(
                                                (option) => option.value === values.select
                                            )}
                                            onChange={(option) =>
                                                form.setFieldValue(field.name, option.value)
                                            }
                                        />
                                    )}
                                </Field>
                            </FormItem>

                            <FormItem
                                label="Comment"

                            >
                                <Field
                                    size="sm"
                                    textArea
                                    type="text"
                                    name="desc"
                                    placeholder="Write..."
                                    component={Input}
                                />
                            </FormItem>
                        </FormContainer>
                        <div className='flex items-center flex-row-reverse '>
                            <Button variant="solid">Save</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
});

RemarkForm.defaultProps = {
    initialData: {
        select: '',
        desc: '',
    },
};

export default RemarkForm;
