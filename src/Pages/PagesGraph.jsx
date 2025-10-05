import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToReadGraph() {
    const navigation = useNavigation();
    const data = useLoaderData();
    console.log(data)

    return (
        <main className="flex flex-col gap-4 items-center justify-center min-h-[80vh] my-6">
            <h1 className="text-2xl font-semibold">Books pages graph</h1>

            {navigation.state === 'loading' ? (
                <p>Loading...</p>
            ) : (
                <div className='bg-gray-100 rounded-2xl mx-auto p-2 md:p-8 w-11/12 h-[70vh]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="bookName"
                                interval={0}
                                tick={{ angle: -90, dx: -5, dy: 100, fontSize: 12 }}
                                height={100}
                            />
                            <YAxis />
                            <Bar
                                dataKey="totalPages"
                                fill="#8884d8"
                                shape={<TriangleBar />}
                                label={{ position: 'top' }}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            )}
        </main>
    );
}