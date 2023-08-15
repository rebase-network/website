import { useState } from "react";
import { IResourceComponentsProps } from "@refinedev/core";

import {
    List,
    useTable,
    EditButton,
    DateField,
    DeleteButton,
} from "@refinedev/antd";

import { Table, Space, Form, Radio } from "antd";

import { ICategory } from "../../interfaces";

export const CategoryList: React.FC<IResourceComponentsProps> = () => {

    const { tableProps } = useTable<ICategory>({
        metaData: {

        },
    });

    return (
        <List>
            <Form layout="inline" initialValues={{ }}>

            </Form>
            <br />
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    sorter
                />
                <Table.Column<ICategory>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                size="small"
                                hideText
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                size="small"
                                hideText
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
