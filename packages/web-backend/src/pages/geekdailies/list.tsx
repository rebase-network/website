import { IResourceComponentsProps } from "@refinedev/core";

import {
    List,
    useTable,
    getDefaultSortOrder,
    FilterDropdown,
    useSelect,
    DateField,
    EditButton,
    DeleteButton,
    ImageField,
    ShowButton,
} from "@refinedev/antd";

import { Table, Select, Space } from "antd";

import { IPost } from "../../interfaces";

import { API_URL } from "../../constants";

export const GeekdailyList: React.FC<IResourceComponentsProps> = () => {

    const { tableProps, sorter } = useTable<IPost>({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
        metaData: {
            populate: ["category", "cover"],
        },
    });

    const { selectProps } = useSelect({
        resource: "categories",
        optionLabel: "title",
        optionValue: "id",
        metaData: {  },
    });

    return (
        <List>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    showSizeChanger: true,
                }}
            >
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    dataIndex="episode"
                    key="episode"
                    title="episode"
                />
                <Table.Column
                    dataIndex="title"
                    key="title"
                    title="Title"
                />

                <Table.Column
                    dataIndex="author"
                    key="author"
                    title="author"
                />
                <Table.Column
                    key="[category][id]"
                    dataIndex={["category", "title"]}
                    title="Category"
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...selectProps}
                            />
                        </FilterDropdown>
                    )}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    sorter={{ multiple: 1 }}
                />

                <Table.Column
                    dataIndex={"cover"}
                    align="center"
                    title="Cover"
                    render={(value) => {

                        return value ? (
                            <ImageField
                                value={API_URL + value.formats.small.url}
                                alt={value?.name}
                                title={value?.name}
                                width={80}
                                preview={{ mask: <></> }}
                            />
                        ) : (
                            <span>---</span>
                        );
                    }}
                />
                <Table.Column<{ id: string }>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => {
                        return (
                            <Space>
                                <ShowButton
                                    hideText
                                    size="small"
                                    recordItemId={record.id}
                                />
                                <EditButton
                                    hideText
                                    size="small"
                                    recordItemId={record.id}
                                />
                                <DeleteButton
                                    hideText
                                    size="small"
                                    recordItemId={record.id}
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
};
